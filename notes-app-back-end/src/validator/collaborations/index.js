const InvariantError = require('../../exceptions/InvariantError');
const { CollaborationPayloadSchema } = require('./schema');

const CollaborationsValidator = {
  validateCollaborationPayload: (payload) => {
    const validatonResult = CollaborationPayloadSchema.validate(payload);

    if (validatonResult.error) {
      throw new InvariantError(validatonResult.error.message);
    }
  },
};

module.exports = CollaborationsValidator;
