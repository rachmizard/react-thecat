import React, { useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import ServiceAPI from "./../service/api";

export const CardFilter = ({ payload, setPayload }) => {
  const [categories, setCategories] = React.useState([]);
  const [breeds, setBreeds] = React.useState([]);

  const getCategories = () => {
    return ServiceAPI.get("/categories").then((res) => {
      setCategories(res.data);
    });
  };

  const getBreeds = () => {
    return ServiceAPI.get("/breeds").then((res) => {
      setBreeds(res.data);
    });
  };

  useEffect(() => {
    getCategories();
    getBreeds();
  }, []);

  const orderByHandler = (e) => {
    if (e.target.value === "none") return;
    setPayload({ ...payload, order: e.target.value });
  };

  const categoryHandler = (e) => {
    setPayload({
      ...payload,
      category_ids: e.target.value === "none" ? "" : e.target.value,
    });
  };

  const breedHandler = (e) => {
    setPayload({
      ...payload,
      breed_id: e.target.value === "none" ? "" : e.target.value,
    });
  };

  const mimeTypesHandler = (e) => {
    const mimeTypes =
      e.target.value === "static"
        ? "png,jpg"
        : e.target.value === "gif"
        ? "gif"
        : "";
    setPayload({
      ...payload,
      mime_types: mimeTypes,
    });
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <span className="d-inline-block align-top">
            <FaSearch />
          </span>
          Search Cat
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Order By</Form.Label>
              <Form.Control as="select" size="sm" onChange={orderByHandler}>
                <option value="none">None</option>
                <option value={"Desc"}>Desc</option>
                <option value={"Asc"}>Asc</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" size="sm" onChange={categoryHandler}>
                <option value="none">None</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect3">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" size="sm" onChange={mimeTypesHandler}>
                <option value="all">All</option>
                <option value="static">Static</option>
                <option value="gif">Gif (Animated)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect3">
              <Form.Label>Breed</Form.Label>
              <Form.Control as="select" size="sm" onChange={breedHandler}>
                <option value="none">All</option>
                {breeds.map((breed, index) => (
                  <option key={index} value={breed.id}>
                    {breed.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
