const db = require('../db.js');

export default async (req, res) => {
   var val=process.env.MINCEUR;
   console.log(process.env.POSTGRES_USER);
   try {
      const {query: {id}} = req;
      var query ="SELECT * FROM bhm.recommandation_programme(15,1.75,'"+val;
     
      query +="')";
      console.log(query);
      const post = await db.one(query);
      
   
      res.status(200).json(post);
   } catch (e) {
      console.error(e);
      res.status(500).end();
   }
};