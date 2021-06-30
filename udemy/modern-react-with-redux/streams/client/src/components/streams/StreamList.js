import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStreams } from "../../store/actions";

const StreamList = () => {
  const dispath = useDispatch();
  const streams = Object.values(useSelector((state) => state.streams));
  const auth = useSelector((state) => state.auth);

  const renderAdmin = (stream) => {
    if (stream.userId === auth.userId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };

  const renderList = () => {
    return streams.map((item) => {
      return (
        <div className="item" key={item.id}>
          {renderAdmin(item)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {item.title}
            <div className="description">{item.description}</div>
          </div>
        </div>
      );
    });
  };

  const renderCreate = () => {
    if (auth.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }} >
          <Link to="/streams/new" className="ui button primary" >Create Stream</Link>
        </div>
      );
    }
  };

  useEffect(() => {
    dispath(fetchStreams());
  }, [dispath]);
  return (
    <div>
      <h2>Streams:</h2>
      <div className="ui celled list">{renderList()}</div>
      {renderCreate()}
    </div>
  );
};

export default StreamList;
