import AxiosServices from './AxiosServices';

export const getAlbums = () => AxiosServices.get('/albums');
