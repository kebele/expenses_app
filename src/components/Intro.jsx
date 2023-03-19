import React from "react";
import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          take control of <span className="accent">your money</span>
        </h1>
        <p>
          personel budgeting is the secret to financial freedom.Start your
          journey today!
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          {/* bunun sebebi başka inputlarımızda olacak ve onlarda bu hideen olan inputu kullanacaklar ve value newUser olacak, Dashboard da neewUser ile kullanacağız, */}
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>create account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="" width={600} />
    </div>
  );
};

export default Intro;
