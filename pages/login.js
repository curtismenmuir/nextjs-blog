import React, { Component } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import shajs from "sha.js";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmit() {
    alert("Email: " + this.state.email + "; Password: " + this.state.password);
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
            onSubmit={() => this.onSubmit()}
            className={utilStyles.loginForm}
          >
            <input
              id="email"
              type="email"
              onChange={(value) => this.setState({ email: value.target.value })}
              required
            />
            <input
              id="password"
              type="password"
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
