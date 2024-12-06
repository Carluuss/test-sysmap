const TaskService = require('../index');
const { Task } = require('../../../db/index');

jest.mock('../../../db/index', () => ({
    Task: {
        create: jest.fn(),
        update: jest.fn(),
        findAll: jest.fn(),
        findByPk: jest.fn(),
        destroy: jest.fn(),
    },
}));

describe('TaskService', () => {
    let taskService;

    beforeEach(() => {
        taskService = new TaskService();
        jest.clearAllMocks();
    });

    it('should create a task', async () => {
        const taskData = { description: 'Test Task', start_Date: '2024-12-01' };
        const mockTask = { id: 1, ...taskData };

        Task.create.mockResolvedValue(mockTask);

        const result = await taskService.create(taskData);

        expect(Task.create).toHaveBeenCalledWith(taskData);
        expect(result).toEqual(mockTask);
    });

    it('should update a task', async () => {
        const taskData = { id: 1, description: 'Updated Task', start_Date: '2024-12-02' };
        const mockUpdatedTask = { id: 1, description: 'Updated Task', start_Date: '2024-12-02' };

        Task.update.mockResolvedValue([1]);
        Task.findByPk.mockResolvedValue(mockUpdatedTask);

        const result = await taskService.update(taskData);

        expect(Task.update).toHaveBeenCalledWith(
            { description: 'Updated Task', start_Date: '2024-12-02' },
            { where: { id: 1 } }
        );
        expect(Task.findByPk).toHaveBeenCalledWith(1);
        expect(result).toEqual(mockUpdatedTask);
    });

    it('should get all tasks', async () => {
        const mockTasks = [
            { id: 1, description: 'Task 1', start_Date: '2024-12-01' },
            { id: 2, description: 'Task 2', start_Date: '2024-12-02' },
        ];

        Task.findAll.mockResolvedValue(mockTasks);

        const result = await taskService.get();

        expect(Task.findAll).toHaveBeenCalled();
        expect(result).toEqual(mockTasks);
    });

    it('should get a task by ID', async () => {
        const mockTask = { id: 1, description: 'Task 1', start_Date: '2024-12-01' };

        Task.findByPk.mockResolvedValue(mockTask);

        const result = await taskService.getById({ id: 1 });

        expect(Task.findByPk).toHaveBeenCalledWith(1);
        expect(result).toEqual(mockTask);
    });

    it('should delete a task', async () => {
        const mockTaskId = 1;

        Task.destroy.mockResolvedValue(1);

        const result = await taskService.delete({ id: mockTaskId });

        expect(Task.destroy).toHaveBeenCalledWith({ where: { id: mockTaskId } });
        expect(result).toEqual(1);
    });
});
