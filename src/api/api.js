
import axios from 'axios';


export default class Api {
      
            
      static async saveIn(input) {
            
            return await axios.post("https://parking-lot-to-pfz.herokuapp.com/parking", {
                  plate: input  
                  },
                  {
                  headers: {
                        "Content-Type": "application/json"
                  }
                  })
                  .then(async (resp) => {
                        return true;
                  })
                  .catch(async (err) => {
                        return false;
                  });        
      }


      static async savePay(plate) {
            
            return await axios.post(`https://parking-lot-to-pfz.herokuapp.com/parking/${plate}/pay`)
                  .then(async (resp) => {
                        return true;
                  })
                  .catch(async (err) => {
                        return false;
                  });        
      }


      static async saveOut(plate) {
            
            return await axios.post(`https://parking-lot-to-pfz.herokuapp.com/parking/${plate}/out`)
                  .then(async (resp) => {
                        return true;
                  })
                  .catch(async (err) => {
                        return false;
                  });        
      }

     
      static async getHistory(plate) {
            
            return await axios.get(`https://parking-lot-to-pfz.herokuapp.com/parking/${plate}`)
                  .then(async (resp) => {
                        return true;
                  })
                  .catch(async (err) => {
                        return false;
                  });        
      }

}