import {NextApiRequest, NextApiResponse} from 'next';
const db = require('/Users/admin/Documents/GitHub/bhmapp-ebs/packages/landing/pages/db.js');


export default async function (req: NextApiRequest,res: NextApiResponse){
    var choix =req.query.choix;
    var poids =req.query.poids;
    var taille =req.query.taille;
    try {
        const {query: {id}} = req;
        var query ="SELECT * FROM bhm.recommandation_programme("+poids;
        query += ",";
        query+=taille;
        query +=",'";
        query+=choix;
        query +="')";
        console.log(query);
        const recommandation = await db.one(query);
        
     
        res.status(200).json(recommandation);
     } catch (e) {
        console.error(e);
        res.status(500).end();
     }
    
}