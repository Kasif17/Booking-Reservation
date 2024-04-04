export const createError = (status,massege)=>{
    const err = new Error();
    err.status = status;
    err.message = massege;
    return err;
}