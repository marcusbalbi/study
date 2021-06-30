import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStreams } from "../../store/actions";

const StreamList = () => {
  const dispath = useDispatch();
  const streams = Object.values(useSelector((state) => state.streams));

  const renderList = () => {
    return streams.map((item) => {
      return (
        <div className="item" key={item.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {item.title}
            <div className="description">{item.description}</div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    dispath(fetchStreams());
  }, [dispath]);
  return (
    <div>
      <h2>Streams:</h2>
      <div className="ui celled list">{renderList()}</div>
    </div>
  );
};

export default StreamList;
