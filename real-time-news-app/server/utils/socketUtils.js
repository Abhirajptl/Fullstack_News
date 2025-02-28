let io;

export const setSocket = (socketInstance) => {
    io = socketInstance;
};

export const emitNewsUpdate = () => {
    if (io) {
        io.emit('newsUpdate');
    }
};
