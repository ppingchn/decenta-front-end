import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../config/axios';
import { useAuth } from './AuthContext';

const ProjectContext = createContext();

function ProjectContextProvider({ children }) {
  const { user } = useAuth();
  const [project, setProject] = useState([]);
  const [headProjectList, setHeadProjectList] = useState([]);
  const [headProjectDetail, setHeadProjectDetail] = useState(null);
  const getAllProject = async () => {
    try {
      const res = await axios.get('/project');
      setProject(res.data.project);
    } catch (err) {
      console.log(err);
    }
  };
  const getHeadProject = async () => {
    try {
      const res = await axios.get('/user');
      setHeadProjectList(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };
  const createProject = async (input) => {
    try {
      await axios.post('/project/create', input);
      getAllProject();
    } catch (err) {
      console.log(err);
    }
  };
  const getHeadProjectDetail = async (id) => {
    try {
      const res = await axios.get(`/user/${id}`);
      setHeadProjectDetail(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteProject = async (id) => {
    try {
      await axios.delete(`/project/delete/${id}`);
      getAllProject();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProject();
    getHeadProject();
  }, [user]);
  return (
    <ProjectContext.Provider
      value={{
        project,
        createProject,
        headProjectList,
        headProjectDetail,
        getHeadProjectDetail,
        deleteProject,
        setHeadProjectDetail,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

const useProject = () => {
  const ctx = useContext(ProjectContext);
  return ctx;
};

export default ProjectContextProvider;
export { useProject };
