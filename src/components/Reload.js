import React from 'react';

const Reload = () => {
  return (
    <div>
      <div>
        <button
          type="button"
          className="Reload"
          onClick={() => {
            window.location.reload();
          }}
        >
          Replay
        </button>
      </div>
    </div>
  );
};

export default Reload;
