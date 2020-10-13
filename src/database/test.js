const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //Inserir dados

    proffyValue = {
        name: "Talysson Gadêlha",
        avatar: "https://avatars2.githubusercontent.com/u/68451890?s=460&u=87fe97a00fd7cd1c12e83cf7b540a666b1250cbf&v=4", 
        whatsapp: "85991553322",
        bio: "Biologia geral | Biólogo",
       
    }
    classValue = {
        subject: "Biologia",
        cost: "200",
        // O proffy id virá pelo banco de dados
    }
    classScheduleValues = [
        //class_id virá pelo bc,apos cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    
   await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consultar os dados inseridos
})