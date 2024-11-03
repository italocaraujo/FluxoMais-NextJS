const ColorIndicator = ({ color }: { color: string }) => (
    <span style={{ backgroundColor: color, width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }}></span>
  );
  
  export default ColorIndicator;