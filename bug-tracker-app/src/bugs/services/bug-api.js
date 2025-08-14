import axios from "axios";

const base_uri = "http://localhost:3030/bugs";

const bugApi = {
    async getAll(){
        const resp = await axios.get(base_uri);
        const bugs = resp.data;
        return bugs
    },
    async save(bug){
        if (bug.id === 0) {
            const resp = await axios.post(base_uri, bug)
            return resp.data
        } else {
            const resp = await axios.put(`${base_uri}/${bug.id}`, bug)
            return resp.data
        }
    },
    async remove(bug){
        const resp = await axios.delete(`${base_uri}/${bug.id}`);
        return resp.data;
    }

}

export default bugApi;