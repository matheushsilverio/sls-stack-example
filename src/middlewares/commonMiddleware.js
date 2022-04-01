import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpErrorHandler from '@middy/http-error-handler';
import cors from '@middy/http-cors';

export default (handler) =>
  middy(handler)
    .use([httpJsonBodyParser(), httpEventNormalizer(), httpErrorHandler(), cors()])
    .onError(async (request, next) => {
      console.log(`OnERROR: `, JSON.stringify(request.error));
      request.response = {
        statusCode: request.response.statusCode,
        isBase64Encoded: false,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify({
          data: {},
          message: 'Bad request',
          error: {
            message: 'Bad Request',
          },
        }),
      };

      return next();
    });
