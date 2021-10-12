import { HandlerResponse, LambdaEvent } from './interfaces/index';

export const handler = async (event: LambdaEvent): Promise<HandlerResponse> => {
    console.log(event.body);

    return {
        statusCode: 200
    };
};
