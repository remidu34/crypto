import { ticketReducer, initialState } from './ticket-converter-feature.reducer';


describe('TicketConverterFeature Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = ticketReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
