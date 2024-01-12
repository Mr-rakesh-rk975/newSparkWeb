import io from 'socket.io-client';

const CON_PORT = 'localhost:9200/';
const socket = io(CON_PORT);

// eslint-disable-next-line
export default socket;