import {
  Select,
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <section className="m-8 flex flex-col lg:flex-row gap-8 items-center">
      {/* Form Section */}
      <div className="w-full lg:w-3/5 flex flex-col items-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Sign Up
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Fill in your details to create an account.
          </Typography>
        </div>
        <form className="mt-8 mb-2 w-full max-w-lg">
          <div className="mb-4 flex flex-col gap-4">
            <Input size="lg" label="Name"/>
            <Input size="lg" label="Family Name"/>
            <Input type="date" size="lg" label="Birthdate" />
            <Checkbox
              label={
                <Typography variant="small" color="gray" className="font-medium">
                  Do you have any chronic sickness?
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography variant="small" color="gray" className="font-medium">
                  Do you have any allergy?
                </Typography>
              }
            />
            <Input size="lg" label="Your Phone Number"/>
            <Input size="lg" label="Relative's Phone Number"/>
            <label id="demo-simple-select-label">Situation</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="situation"
              label="Situation"
              // onChange={handleChange}
            >
              <MenuItem value="emergent">Emergent</MenuItem>
              <MenuItem value="urgent">Urgent</MenuItem>
              <MenuItem value="semi-urgent">Semi Urgent</MenuItem>
              <MenuItem value="non-urgent">Non Urgent</MenuItem>
            </Select>
          </div>

          <Checkbox
            label={
              <Typography variant="small" color="gray" className="font-medium">
                I agree to the
                <a href="#" className="text-black underline ml-1">Terms and Conditions</a>
              </Typography>
            }
          />

          <Button className="mt-6 w-full">Sign Up</Button>
          <Checkbox
            label={
              <Typography variant="small" color="gray" className="font-medium">
                Subscribe me to the newsletter
              </Typography>
            }
            className="mt-4"
          />

          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign In</Link>
          </Typography>
        </form>
      </div>

      <div className="w-full lg:w-2/5 hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
          alt="Background"
        />
      </div>
    </section>
  );
}

export default SignUp;
