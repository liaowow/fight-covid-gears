import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import FormStyles from './styles/FormStyles';
import useForm from '../lib/useForm';
import ErrorMessage from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function LogIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const [login, { data, loading }] = useMutation(LOGIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    // send email and pw to graphQL API
    await login();
    resetForm();
  }
  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;
  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h2>Log In to Your Account</h2>
      <ErrorMessage error={error} />
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Your password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Log In</button>
      </fieldset>
    </FormStyles>
  );
}
