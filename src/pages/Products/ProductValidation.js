function Validation(values){
    
    let error = {}

    if(values.product === ""){
        error.product = "product should not be empty"
    } 
    else{
        error.product = ""
    }

    if(values.details === ""){
        error.details = "details should not be empty"
    } 
    else{
        error.details = ""
    }

    if(values.category === ""){
        error.category = "category should not be empty"
    } 
    else{
        error.category = ""
    }

    if(values.price === ""){
        error.price = "price should not be empty"
    } 
    else{
        error.price = ""
    }


    return error;   
}

export default Validation;