
import { Card, Button } from "react-bootstrap";

const CatalogCard = ({ id, title, description, image }) => {
  const handleCompare = () => {
    const item = { id, title, description, image };
    const existing = JSON.parse(localStorage.getItem("comparedItems")) || [];

    // Avoid duplicates
    const updated = existing.some(i => i.id === id) ? existing : [...existing, item];
    localStorage.setItem("comparedItems", JSON.stringify(updated));

    alert("Added to Comparison");
  };

  return (
    <Card className="mb-4 shadow-sm h-100">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" size="sm" onClick={handleCompare}>
          ➕ Compare
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CatalogCard;
