class Listener {
    constructor(notesService, mailSender) {
      this._notesService = notesService;
      this._mailSender = mailSender;
  
      this.listen = this.listen.bind(this);
    }
  
    async listen(message) {
      try {
        const { targetEmail } = JSON.parse(message.content.toString());

        const userId = 'user-w3IkdAduv8vu_Vdy';
        console.log(userId);
  
        const notes = await this._notesService.getNotes(userId);
        const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(notes));
        // console.log('result ',result);
        console.log('notes ',notes);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = Listener;