const { response} = require('express'); 

const usuariosGet =  ( req, res = response)=>{
    
    const {q, nombre = 'no name ', apikey, page = 1, limit }= req.query;
    res.json( {
        msg: 'get API  - controlador ',
        q,
        nombre,
        apikey,
        page,
        limit
    });
    }

const usuariosPost = ( req, res = response)=>{

        const {nombre,edad} = req.body;

        res.status(201).json( {
            msg: 'post API -Controladorsito',
            nombre,
            edad
        });
        }


 const usuariosPut  = ( req, res = response )=>{

    const {id }= req.params;

            res.status(500).json( {
                msg: 'put API - Controlaitor',
                id

            });
            }       

const usuariosPatch =  ( req, res = response )=>{

                res.json( {
                    msg: 'patch AP - Controlairar'
                });
                }

const usuariosDelete =  ( req, res = response)=>{

                    res.json( {
                        msg: 'delete API - Controlite'
                    });
                    }
module.exports = { 
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
