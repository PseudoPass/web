import { useGoogleOAuth } from 'your-google-oauth-library';

function GoogleLogin() {
  const { signIn } = useGoogleOAuth();

  const handleSignIn = () => {
    signIn();
  };

  return (
    <button onClick={handleSignIn}>
      Sign in with Google
    </button>
  );
}

export default GoogleLogin;