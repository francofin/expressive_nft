var admin = require("firebase-admin");

var serviceAccount = require("../config/firebaseServiceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



module.exports= {
    authMiddleware: async ({req}) => {

      try {

          const currentUser = await admin.auth().verifyIdToken(req.headers.authtoken);
          console.log("Current User Is", currentUser);
          return currentUser;
      } catch (err){
        console.log("AUTH CHECK ERROR", err);
        console.log("HEADERS", req.headers)
        throw new Error('Invalid or Expired Token');
      }
    },
    authCheckImageMiddleware: (req, res, next) => {
      if(req.headers.authtoken){
        admin.auth().verifyIdToken(req.headers.authtoken)
        .then((result) => {
          next();
        })
        .catch(error => console.log(error))
    } else {
      res.json({error:'Unauthorized Access'})
    }
  },
    authCheck: (req, res) => {
      if (req.headers.authtoken) {
          admin
              .auth()
              .verifyIdToken(req.headers.authtoken)
              .then((result) => {
                  next();
              })
              .catch((error) => console.log("Errors", error));
      } else {
          res.json({ error: "Error" });
      }
  }
};