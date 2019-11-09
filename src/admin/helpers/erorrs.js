export const errorHandler = errorData => {
    const errorResponseMessage = errorData.response.data;

    if (errorResponseMessage.errors.percent[0]) {
        throw new Error(errorResponseMessage.errors.percent[0])
    } 
    if (errorResponseMessage.errors.title[0]) {
        throw new Error(errorResponseMessage.errors.title[0])
    }

    if (errorResponseMessage.message) {
        switch (errorResponseMessage.message) {
            case "The given data was invalid.":
                throw new Error("Ошибка валидации")
                break;
            
            default:
                    throw new Error(errorResponseMessage.message)
                break;
        }
    }
    
}