import React, { Component } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import shajs from "sha.js";
import * as GQL from "../graphql/index";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  async onSubmit(e) {
    // Stop page refresh on Submit
    e.preventDefault();

    // Generate mutation
    let mutation = GQL.Mutations.loginUser(
      this.state.email,
      this.state.password
    );

    // Execute mutation
    let result = await GQL.Client.executeMutation(mutation);
    if (result === "Invalid Password" || result === "Invalid Request") {
      alert("FAIL: " + result);
    } else if (result.data !== undefined) {
      alert("LOGIN SUCCESS: " + result.data.loginUser);
    }
  }

  hashPassword(value) {
    let hash = shajs("sha256").update(value).digest("hex");
    this.setState({ password: hash });
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{"Login"}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>{"Please enter your login details:"}</p>
          <form
            onSubmit={(e) => this.onSubmit(e)}
            className={utilStyles.loginForm}
          >
            <input
              id={"email"}
              type={"email"}
              onChange={(value) => this.setState({ email: value.target.value })}
              required
            />
            <input
              id={"password"}
              type={"password"}
              onChange={(value) => this.hashPassword(value.target.value)}
              required
            />
            <button>{"Submit"}</button>
          </form>
        </section>
      </Layout>
    );
  }
}
