import Nav from "../components/Nav";
import event from "../assets/event.jpeg";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const [comment, setComment] = useState("");
    const { slug } = useParams();

    const addComment = (e) => {
        e.preventDefault();
        console.log(comment, slug);
    };
    return (
        <div>
            <Nav />
            <header className='details_header'>
                <h2 style={{ marginBottom: "15px" }}>Title</h2>
                <p style={{ opacity: 0.6 }}>
                    Hosted by: <span style={{ fontWeight: "bold" }}>Host</span>
                </p>
            </header>
            <main className='details_main'>
                <div className='details_content'>
                    <img src={event} alt='Event' className='details_image' />
                    <div style={{ marginBottom: "30px" }}>Description</div>
                    <div style={{ padding: "30px 0" }}>
                        <h2 style={{ color: "#1d5d9b", marginBottom: "15px" }}>
                            Attendees
                        </h2>
                        <p style={{ opacity: 0.6 }}>Attendees</p>
                    </div>

                    <div className='comments'>
                        <h2 style={{ color: "#1d5d9b" }}>Comments</h2>
                        <form className='comment_form' onSubmit={addComment}>
                            <textarea
                                rows={4}
                                className='commentInput'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                required
                            />
                            <button className='buttons commentBtn'>Comment</button>
                        </form>

                        <div className='comment_section'>
                            <div
                                style={{
                                    padding: "15px",
                                    border: "1px solid #ddd",
                                    borderRadius: "3px",
                                    marginBottom: "10px",
                                }}
                                key={comment.id}
                            >
                                <p style={{ color: "#1d5d9b", marginBottom: "3px" }}>@User</p>
                                <p style={{ opacity: 0.5 }}>Comment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='details_cta'>
                    <p style={{ marginBottom: "10px", opacity: "0.6" }}>
                        Click here to register
                    </p>
                    <button className='buttons registerBtn'>Register</button>
                </div>
            </main>
        </div>
    );
};

export default EventDetails;
