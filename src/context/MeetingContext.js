import axios from '../config/axios';
import { createContext, useContext, useState, useEffect } from 'react';

const MeetingContext = createContext();

function MeetingContextProvider({ children }) {
  const [meeting, setMeeting] = useState([]);
  const [meetingDetail, setMeetingDetail] = useState({});
  const [agenda, setAgenda] = useState({});
  const [secretary, setSecretary] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMeeting = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/meeting');
      setMeeting(res.data.meeting);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMeeting();
    getSecretary();
  }, []);
  const createMeeting = async (input) => {
    try {
      await axios.post('/meeting/create', input);
      await fetchMeeting();
    } catch (err) {
      console.log(err);
    }
  };
  const deleteMeeting = async (id) => {
    try {
      await axios.delete(`/meeting/delete/${id}`);
      fetchMeeting();
    } catch (err) {
      console.log(err);
    }
  };
  const getSecretary = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/meeting/secretary');
      setSecretary(res.data.sercretary);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const getMeetingDetail = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`/meeting/${id}`);
      setMeetingDetail(res.data.meeting);
      setAgenda(res.data.agenda);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <MeetingContext.Provider
      value={{
        meeting,
        createMeeting,
        secretary,
        meetingDetail,
        agenda,
        getMeetingDetail,
        deleteMeeting,
        loading,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
}

const useMeeting = () => {
  const ctx = useContext(MeetingContext);
  return ctx;
};
export default MeetingContextProvider;
export { useMeeting };
