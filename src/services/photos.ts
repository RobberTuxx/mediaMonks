import AxiosServices from './AxiosServices';

export const getPhotos = () => AxiosServices.get('/photos');
