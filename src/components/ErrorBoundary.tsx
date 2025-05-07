"use client";
import { Component, ReactNode } from "react";

export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(err: Error) {
    return { error: err };
  }

  render() {
    if (this.state.error)
      // @ts-expect-error - error is not null
      return <p className="text-red-600">{this.state.error.message}</p>;
    return this.props.children;
  }
}
