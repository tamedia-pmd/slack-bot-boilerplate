export interface LambdaEvent {
    resource: string;
    path: string;
    httpMethod: string;
    headers: {
        [index: string]: string;
    };
    queryStringParameters: null;
    pathParameters: null;
    stageVariables: null;
    requestContext: {
        path: string;
        accountId: string;
        resourceId: string;
        stage: string;
        requestId: string;
        identity: {
            cognitoIdentityPoolId: null;
            accountId: null;
            cognitoIdentityId: null;
            caller: null;
            apiKey: string;
            sourceIp: string;
            accessKey: null;
            cognitoAuthenticationType: null;
            cognitoAuthenticationProvider: null;
            userArn: null;
            userAgent: string;
            user: null;
        };
        resourcePath: string;
        httpMethod: string;
        apiId: string;
    };
    body: string;
    isBase64Encoded: boolean;
}

export interface HandlerResponse {
    headers?: {
        [headerName: string]: string;
    };
    body?: string;
    statusCode: number;
}
