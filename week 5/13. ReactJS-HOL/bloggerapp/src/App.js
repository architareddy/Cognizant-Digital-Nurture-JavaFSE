import React, { Component } from 'react';

// --- Static Data Mock Arrays (As defined in hints) ---
export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const courses = [
  { id: 1, cname: 'Angular', date: '4/5/2021' },
  { id: 2, cname: 'React', date: '6/3/2021' },
];

const blogs = [
  { id: 501, title: 'React Learning', author: 'Stephen Biz', body: 'Welcome to learning React!' },
  { id: 502, title: 'Installation', author: 'Schewzdenier', body: 'You can install React from npm.' },
];

// --- Functional List Sub-Components ---

function BookDetails(props) {
  // Utilizing the map() function to transform raw mock arrays into JSX blocks
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {props.books.map((book) => (
        // Lab Objective: Declaring explicit unique key properties for element identification
        <div key={book.id} style={{ margin: '15px 0' }}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );
}

function CourseDetails(props) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {props.courses.map((course) => (
        <div key={course.id} style={{ margin: '15px 0' }}>
          <h3>{course.cname}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </ul>
  );
}

function BlogDetails(props) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {props.blogs.map((blog) => (
        <div key={blog.id} style={{ margin: '15px 0' }}>
          <h3>{blog.title}</h3>
          <strong>{blog.author}</strong>
          <p style={{ color: '#555' }}>{blog.body}</p>
        </div>
      ))}
    </ul>
  );
}

// --- Main Container Class Component ---

class App extends Component {
  render() {
    // Implementing Element Variables (as outlined in the lab guidelines)
    const bookdet = <BookDetails books={books} />;
    const coursedet = <CourseDetails courses={courses} />;
    const content = <BlogDetails blogs={blogs} />;

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        {/* CSS grid configuration layout mimicking the split columns shown in your layout example */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', textAlign: 'center', alignItems: 'start' }}>
          
          {/* Section 1: Course Details */}
          <div className="mystyle1">
            <h1>Course Details</h1>
            {coursedet}
          </div>

          {/* Visual Divider Line */}
          <div style={{ width: '4px', backgroundColor: 'green', height: '80vh', alignSelf: 'stretch', margin: '0 20px' }}></div>

          {/* Section 2: Book Details */}
          <div className="st2">
            <h1>Book Details</h1>
            {bookdet}
          </div>

          {/* Visual Divider Line */}
          <div style={{ width: '4px', backgroundColor: 'green', height: '80vh', alignSelf: 'stretch', margin: '0 20px' }}></div>

          {/* Section 3: Blog Details */}
          <div className="v1">
            <h1>Blog Details</h1>
            {content}
          </div>

        </div>
      </div>
    );
  }
}

export default App;