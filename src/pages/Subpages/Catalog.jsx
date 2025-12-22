import React, { useState } from "react";
import CatalogCard from "../../components/CatalogCard";
import { Form, Row, Col, Button } from "react-bootstrap";

const categories = [
  "All",
  "Web Development",
  "AI & ML",
  "Design",
  "Cybersecurity",
  "Cloud",
];

const sampleImages = [
  "https://source.unsplash.com/300x200/?technology",
  "https://source.unsplash.com/300x200/?coding",
  "https://source.unsplash.com/300x200/?ai",
  "https://source.unsplash.com/300x200/?design",
  "https://source.unsplash.com/300x200/?cloud",
];

const generateItems = () =>
  Array.from({ length: 50 }, (_, i) => {
    const category = categories[i % categories.length];
    return {
      id: i + 1,
      title: `Course ${i + 1}`,
      description: `Learn ${category}.`,
      category,
      image: sampleImages[i % sampleImages.length],
    };
  });

const Catalog = () => {
  const allItems = generateItems();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  // 🧠 Filter + Search
  const filteredItems = allItems.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🧮 Pagination
  const totalPages = Math.ceil(filteredItems.length / cardsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div className="min-vh-100 bg-light p-4">
      <h2 className="text-center text-primary mb-4">📚 Course Catalog</h2>

      {/* 🔍 Search + Filter */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </Col>
        <Col md={4}>
          <Form.Select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {/* 🧱 Card Masonry */}
      <div
        style={{
          columnCount: 3,
          columnGap: "1.5rem",
        }}
      >
        {paginatedItems.map((item) => (
          <CatalogCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>

      {/* 📜 Pagination */}
      <div className="text-center mt-4">
        <Button
          variant="secondary"
          className="me-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ◀ Prev
        </Button>
        <span className="mx-2 fw-bold text-primary">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="secondary"
          className="ms-2"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next ▶
        </Button>
      </div>
    </div>
  );
};

export default Catalog;
