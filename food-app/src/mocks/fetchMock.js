const fetchMock = (data) => {
  global.fetch = jest.fn((data) => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(data);
      },
    });
  });
};

export default fetchMock;
