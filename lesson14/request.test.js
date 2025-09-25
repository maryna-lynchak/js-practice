const axios = require('axios');

test(`Test GET posts 1`, async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const response = await axios.get(url);

    expect(response.status).toBe(200);
    expect(response.data).toEqual({
        id: expect.any(Number),
        userId: expect.any(Number),
        title: expect.any(String),
        body: expect.any(String)
    });
    expect(response.data.id).toBe(1);
});

test(`Test GET posts 2`, async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/2';
    const response = await axios.get(url);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 2);
    expect(response.data).toHaveProperty("userId");
    expect(response.data).toHaveProperty("title");
  });

test(`Test GET posts 3`, async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/7';
    const response = await axios.get(url);
    
    expect(response.status).toBe(200);
    expect(response.data).toEqual({
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\n" +
            "magni quis enim qui quis quo nemo aut saepe\n" +
            "quidem repellat excepturi ut quia\n" +
            "sunt ut sequi eos ea sed quas"
    });
  });

test(`Test GET posts 4`, async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/3';
    const response = await axios.get(url);
    
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('ea molestias quasi exercitationem repellat qui ipsa sit aut');
  });

test(`Test GET posts 5`, async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/10';
    const response = await axios.get(url);
    
    expect(response.status).toBe(200);
    expect(response.data.body).toBe('quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error');
  });

test('Test POST', async () => {
    const userId = 1;
    const title = 'Title 1';
    const body = 'Body 1';

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId,
        title,
        body,
    });

    expect(response.status).toBe(201);
    expect(response.data.userId).toBe(userId);
    expect(response.data.title).toBe(title);
    expect(response.data.body).toBe(body);
});
