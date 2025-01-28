import Layout from '@/components/layouts/layouts'
import React from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);

  return (

    <Layout>
         <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">Create Account</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full rounded-lg border p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              className="w-full rounded-lg border p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
          <button className="w-full rounded-lg bg-green-500 p-3 text-white font-bold hover:bg-green-600">Create Account</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
        Already have account? <a href="/login" className="font-bold text-black hover:underline">Login</a>
        </p>
      </div>
    </div>
    </Layout>
  )
}

export default RegisterPage