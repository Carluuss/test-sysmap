const UserService = require("../index");
const { User } = require("../../../db/index"); // Mock do banco de dados
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
jest.mock("../../../db/index"); 
jest.mock("../../nodemailer");

describe("UserService Tests", () => {
  let userService;

  beforeAll(() => {
    userService = new UserService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockUser = {
    id: 1,
    name: "Test User",
    email: "test@example.com",
    password: "123456",
  };

  jest.spyOn(bcrypt, "hash").mockResolvedValue("hashed_password");

  User.create.mockResolvedValue({ ...mockUser, password: "hashed_password" });

  const sendEmail = require("../../nodemailer");
  sendEmail.mockResolvedValue(true);

  it("Deve criar um novo usuário e enviar um e-mail", async () => {
    const user = { ...mockUser };

    const result = await userService.create(user);

    expect(User.create).toHaveBeenCalledTimes(1);
    expect(User.create).toHaveBeenCalledWith({
      ...user,
      password: "hashed_password",
    });

    expect(sendEmail).toHaveBeenCalledTimes(1);
   

    expect(result).toMatchObject({
      id: mockUser.id,
      name: mockUser.name,
      email: mockUser.email,
    });
  });

  it("Deve atualizar um usuário existente", async () => {
    User.findByPk.mockResolvedValue(mockUser);
    User.update.mockResolvedValue([1]);

    const updatedUser = await userService.update({
      id: mockUser.id,
      name: "Updated Name",
    });

    expect(User.update).toHaveBeenCalledTimes(1);
    expect(User.update).toHaveBeenCalledWith(
      { name: "Updated Name", password: undefined },
      { where: { id: mockUser.id } }
    );

    expect(updatedUser).toEqual(mockUser);
  });

  it("Deve obter todos os usuários", async () => {
    User.findAll.mockResolvedValue([mockUser]);

    const users = await userService.get();

    expect(User.findAll).toHaveBeenCalledTimes(1);
    expect(users).toEqual([mockUser]);
  });

  it("Deve obter um usuário por ID", async () => {
    User.findByPk.mockResolvedValue(mockUser);

    const user = await userService.getById({ id: mockUser.id });

    expect(User.findByPk).toHaveBeenCalledTimes(1);
    expect(User.findByPk).toHaveBeenCalledWith(mockUser.id);
    expect(user).toEqual(mockUser);
  });

  it("Deve excluir um usuário", async () => {
    User.destroy.mockResolvedValue(1); 
    const result = await userService.delete({ id: mockUser.id });

    expect(User.destroy).toHaveBeenCalledWith({ where: { id: mockUser.id } });
  });

  it("Deve fazer login e retornar um token JWT", async () => {
    jest.spyOn(bcrypt, "compare").mockResolvedValue(true); 
    User.findOne.mockResolvedValue({ ...mockUser, password: "hashed_password" });
    jest.spyOn(jwt, "sign").mockReturnValue("mocked_token");

    const token = await userService.login({
      email: mockUser.email,
      password: "123456",
    });

    expect(User.findOne).toHaveBeenCalledTimes(1);
    expect(User.findOne).toHaveBeenCalledWith({ where: { email: mockUser.email } });

    expect(bcrypt.compare).toHaveBeenCalledWith("123456", "hashed_password");

    expect(jwt.sign).toHaveBeenCalledTimes(1);
    expect(token).toEqual({ token: "mocked_token" });
  });
});
