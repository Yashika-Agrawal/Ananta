import { Component, ErrorInfo, ReactNode } from 'react';
import { StarFieldCanvas } from '../common/StarFieldCanvas';

interface WebGLErrorBoundaryProps {
  children: ReactNode;
}

interface WebGLErrorBoundaryState {
  hasError: boolean;
}

export class WebGLErrorBoundary extends Component<WebGLErrorBoundaryProps, WebGLErrorBoundaryState> {
  constructor(props: WebGLErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): WebGLErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('WebGL Context / 3D Canvas Error caught by Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <StarFieldCanvas density={100} speed={0.15} />
          {this.props.children}
        </>
      );
    }
    return this.props.children;
  }
}
