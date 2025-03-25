import React from "react"; // ✅ Ensure React is imported
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TodoList from "../components/TodoList"; // ✅ Ensure correct import path

describe("TodoList Component", () => {
  it("renders TodoList component with initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
  });

  it("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText(/New Task/i)).toBeInTheDocument();
  });

  it("toggles a todo's completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  it("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    const deleteButton = screen.getByRole("button", { name: /delete/i }); // Ensure it finds the correct button
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
