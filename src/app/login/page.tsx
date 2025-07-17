import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="mt-5 flex flex-1 items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          <CardTitle className="text-center mb-4">Login</CardTitle>
          <AuthForm type="login" />
        </CardHeader>
      </Card>
    </div>
  );
};

export default Login;
