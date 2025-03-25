import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TodoList from "../TodoList"; // Adjust path if needed

describe("TodoList Component", () => {
  it("renders TodoList component with initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });
});
