import { z } from 'zod';

export const urlSchema = z.string().url();

export interface AssetSelectorState {
  image: string | null;
  imageName: string | null;
  imageSize: number | null;
  inputValue: string;
  inputError: string | null;
  dragActive: boolean;
  loading: boolean;
  dragError: boolean;
  imageError: boolean;
  isDataUrl: boolean; // New flag to track if current image is from a dropped file
  originalFile: File | null; // Store the original File object for dropped/selected files
}

export type AssetSelectorAction =
  | { type: 'SET_IMAGE'; payload: { image: string; name?: string; size?: number; isDataUrl?: boolean; file?: File | null } }
  | { type: 'SET_INPUT_VALUE'; payload: string }
  | { type: 'SET_INPUT_ERROR'; payload: string | null }
  | { type: 'SET_DRAG_STATE'; payload: { active: boolean; error: boolean } }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_IMAGE_ERROR'; payload: boolean }
  | { type: 'RESET_STATE' }
  | { type: 'CLEAR_PREVIEW' };

export const initialState: AssetSelectorState = {
  image: null,
  imageName: null,
  imageSize: null,
  inputValue: '',
  inputError: null,
  dragActive: false,
  loading: false,
  dragError: false,
  imageError: false,
  isDataUrl: false,
  originalFile: null,
};

export const assetSelectorReducer = (
  state: AssetSelectorState,
  action: AssetSelectorAction
): AssetSelectorState => {
  switch (action.type) {
    case 'SET_IMAGE':
      return {
        ...state,
        image: action.payload.image,
        imageName: action.payload.name || null,
        imageSize: action.payload.size || null,
        imageError: false,
        inputError: null,
        isDataUrl: action.payload.isDataUrl || false,
        originalFile: action.payload.file || null,
      };
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload,
        inputError: null,
        imageError: false,
      };
    case 'SET_INPUT_ERROR':
      return {
        ...state,
        inputError: action.payload,
      };
    case 'SET_DRAG_STATE':
      return {
        ...state,
        dragActive: action.payload.active,
        dragError: action.payload.error,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_IMAGE_ERROR':
      return {
        ...state,
        imageError: action.payload,
        imageName: action.payload ? null : state.imageName,
        imageSize: action.payload ? null : state.imageSize,
        originalFile: action.payload ? null : state.originalFile,
      };
    case 'CLEAR_PREVIEW':
      return {
        ...state,
        image: null,
        imageName: null,
        imageSize: null,
        imageError: false,
        isDataUrl: false,
        originalFile: null,
      };
    case 'RESET_STATE':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export enum ErrorTypes {
  IMAGE_ERROR = 'IMAGE_ERROR',
  INPUT_ERROR = 'INPUT_ERROR',
  DRAG_ERROR = 'DRAG_ERROR',
}