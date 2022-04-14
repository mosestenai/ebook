export const BOOKS_API_URL = 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql/';

export const BOOKS_QUERY = `
{
    book {
      pages{
        content
        tokens{
          position
        }
      }
    }
}
  `;