const Checkerboard = ({ scrollXTop }: { scrollXTop: number }) => {
  return (
    <div
      className="w-full h-2 overflow-hidden bg-contain"
      style={{
        backgroundImage:
          "url('/images/retrohacks_images/checkerboard_pattern.png')",
        backgroundRepeat: "repeat-x",
        backgroundPositionX: `${scrollXTop}px`,
      }}
    />
  );
};

export default Checkerboard;
