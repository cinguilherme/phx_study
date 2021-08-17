defmodule HelloWeb.HelloController do
  use HelloWeb, :controller

  def index(conn, _params) do
    conn
    |> put_resp_content_type("text/html")
    |> put_flash(:info, "Welcome Back!")
    |> assign(:var, "I Am a String")
    |> render("index.html")
  end

  def show(conn, %{"messenger" => messenger}) do
    render(conn, "show.html", messenger: messenger)
  end

  def showoff(conn, params) do

    conn
    |> assign(:var, %{
      "name" => "Guilherme",
      "email" => "cuilherme@gmail.com",
      "age" => 34,
    })
    |> render("showoff.html")

  end

end
