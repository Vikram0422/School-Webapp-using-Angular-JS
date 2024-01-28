 
const { Client } = require('pg')


const config ={
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database:'fxschool'    
};

async function executeQuerry(sql){ 
    var res;
    const client = new Client(config);
    client.connect();
    await client.query(sql).then(result => res =  result.rows)
      .catch(e => console.error(e.stack))
      .then(() => client.end());
    return res;
  };


async function getadmission(){
    try{
        //await executeQuerry("CREATE TABLE IF NOT EXISTS OREDR(ID INTEGER,TITLE TEXT,MESSAGE TEXT,PRIMARY KEY(ID));")
        //await executeQuerry("INSERT INTO ORDERS VALUES(3,'VIKRAM','done','8','tvl');");
        let sql = "SELECT * FROM admission;";
        let result = await executeQuerry(sql);
        return result;
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}


async function getLogin(user_name,password){
  const text = 'select * from login where login_user_name = $1 and login_password = $2;'
    const values = [user_name,password]
    var res;
    const client = new Client(config);
    client.connect();
    try {
         await client.query(text, values).then(result => res =  result.rows)
        .catch(e => console.error(e.stack))
        .then(() => client.end());
      return res;
      
      //console.log(result);
  }
  catch(error){
      console.log(error);
  }
}

async function getStudent_Details(registerNumber){
    const text = 'select * from student_personal_details where register_number = $1'
    const values = [registerNumber]
    var res;
    const client = new Client(config);
    client.connect();
    try {
         await client.query(text, values).then(result => res =  result.rows)
        .catch(e => console.error(e.stack))
        .then(() => client.end());
      return res;
        
        // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
      } catch (err) {
        console.log(err.stack)
      }
}

async function getStaff_Details(registerNumber){
  const text = 'select * from staff_profile where staff_code = $1'
  const values = [registerNumber]
  var res;
  const client = new Client(config);
  client.connect();
  try {
       await client.query(text, values).then(result => res =  result.rows)
      .catch(e => console.error(e.stack))
      .then(() => client.end());
    return res;
      
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
      console.log(err.stack)
    }
}



async function saveAdmission(response){
    try{

        var res;
        console.log(response);
        const admission_detail =  await getadmission()
      let rowCount = admission_detail.length + 1;
        const query = `INSERT INTO public.admission(
          admision_name, mother_name, gender, mobile_number, alt_mobile_number, father_name, dob, email_id, whatsapp_number, aadhar_number, address, landmark, city, district, state, pincode, community, mother_occupation, caste, father_occupation, family_income, password, religion, role,id)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24,$25)`
          const values = [response.name, response.mother_name, response.gender, response.mobile_number, response.alt_mobile_number, response.father_name, response.dob, response.email_id, response.whatsapp_number, response.aadhar_number, response.address, response.landmark, response.city, response.district, response.state, response.pincode, response.community, response.mother_occupation, response.caste, response.father_occupation, response.family_income, '12345', response.religion, response.role,rowCount]
        const client = new Client(config);
         client.connect();
         await client.query(query,values).then(result => res =  result.rows)
        .catch(e => console.error(e.stack))
        .then(() => client.end());
        return res;


    }catch(err){
        console.log(err);
    }
}

  async function login(response){
    try{

      var res;
      console.log(response);
      const query = `select * from admission where mobile_number = $1 and password = $2`
        const values = [response.username,response.password]
      const client = new Client(config);
       client.connect();
       await client.query(query,values).then(result => {
        console.log(result);
        res =  result.rows
      })
      .catch(e => console.error(e.stack))
      .then(() => client.end());
      return res;
  }catch(err){
      console.log(err);
  }

}


module.exports= {
    getLogin: getLogin,
    getStudent_Details: getStudent_Details,
    saveAdmission: saveAdmission,
    getStaff_Details: getStaff_Details,
    getadmission:getadmission,
    login:login
}