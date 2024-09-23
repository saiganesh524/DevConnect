const adminAuth = (req, res, next) => {
  // Logic of checking if req is authorized
  console.log("Checking if req is authorized");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    return res.status(401).send("Unauthorized Access");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  // Logic of checking if req is authorized
  console.log(" User Auth is Checking if req is authorized");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    return res.status(401).send("Unauthorized Access");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
